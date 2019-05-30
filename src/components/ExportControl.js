/*This component controls the 3D export format selection and export action.
onChange={props.on3DFormatSelect} updates App.js chosen_export_3d_format value*/

import React from 'react';
import AdmZip from 'adm-zip'
import FileSaver from 'file-saver'
// var AdmZip = require('adm-zip');



class ExportControl extends React.Component {
    constructor() {
        super();
    
        this.state = {
          showMenu: false,
          fotmatTitle: "Export Format"
        };
    
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
    
      closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });
        }
      }

    // extracts the material library and the name of material used
    // within the .obj file
    // this is used in handle_data() function
    obj_parse(obj_text) {

        let lines = obj_text.split('\n')

        let result = {}
        let i = 0
        let mtllib_line = ''
        let usemtl_line = ''

        while (i < lines.length) {
            while (i < lines.length) {
                if (lines[i] === undefined) {
                    break
                }
                if (lines[i].startsWith('mtllib')) {
                    mtllib_line = lines[i]
                    break
                }
                else {
                    i++
                    continue
                }
            }
            if (mtllib_line !== -1) {
                while (i < lines.length) {
                    if (lines[i] === undefined) {
                        break
                    }
                    if (lines[i].startsWith('usemtl')) {
                        usemtl_line = lines[i]
                        break
                    }
                    else {
                        i++
                        continue
                    }
                }
            }
            else {
                break
            }
            if (mtllib_line.length !== 0 && usemtl_line.length !== 0) {
                result['mtllib_line'] = mtllib_line
                result['usemtl_line'] = usemtl_line
                return result
            }
            else {
                return result
            }
        }
        return result
    }

    handle_data(data, obj_parse_pointer, this_pointer, file_name) {

        let obj_info = obj_parse_pointer(data)

        // console.log(obj_info)

        let is_empty = Object.entries(obj_info).length === 0 && obj_info.constructor === Object

        // prepare files to be exported (obj and mtl placeholders)
        let obj_file_name = file_name
        let mtl_file_name = ''
        let material_name = ''

        // form the obj file name
        if (!obj_file_name.endsWith('.obj')) {
            obj_file_name = obj_file_name + '.obj'
        }

        //convert the hex colour tracked by the App.js (chosen_case_colour)
        // to RGB space, as .mtl file only hold the material colour
        // as RGB colour
        function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }

        // if we dont have an mtl file, we need to create one
        // this entire function is to:
        // - create the mtl file structure
        // - create a zip file
        // - load both mtl and obj files into zip
        // - save the files using FileSaver module to user file system

        // if we have an obj file and is not empty (protection agains empty download)
        if (!is_empty) {
            // console.log(obj_info.mtllib_line)
            // console.log(obj_info.usemtl_line)
            // console.log(this_pointer.props.chosen_case_colour)

            // prep the file naming of obj and mtl files
            // based on obj files lines containing reference to material and
            // material library used (research obj file format for understanding)
            mtl_file_name = obj_info.mtllib_line.split('mtllib')[1].trim()
            material_name = obj_info.usemtl_line.split('usemtl')[1].trim()

            // prepare zip object
            var zip = new AdmZip();

            // prepare and append .obj file
            var content = data;
            zip.addFile(obj_file_name, Buffer.alloc(content.length, content), "");

            // create new .mtl file to accompany .obj file
            // .mtl file we use App.js chose_case_colour property
            // as converted to rgb
            let mtl_content = ''
            mtl_content += 'newmtl '
            mtl_content += material_name
            mtl_content += '\n'
            mtl_content += 'Ns 225.000000\n'
            mtl_content += 'Ka 1.000000 1.000000 1.000000\n'
            mtl_content += 'Kd '//0.800000 0.777799 0.285769\n'
            let rgb = hexToRgb(this_pointer.props.chosen_case_colour)
            mtl_content += ('' + rgb.r / 255).substr(0, 8)
            mtl_content += ' '
            mtl_content += ('' + rgb.g / 255).substr(0, 8)
            mtl_content += ' '
            mtl_content += ('' + rgb.b / 255).substr(0, 8)
            mtl_content += '\n'
            mtl_content += 'Ks 0.500000 0.500000 0.500000\n'
            mtl_content += 'Ke 0.0 0.0 0.0\n'
            mtl_content += 'Ni 1.450000\n'
            mtl_content += 'd 1.000000\n'
            mtl_content += 'illum 2\n'

            // add .mtl file to zip
            zip.addFile(mtl_file_name, Buffer.alloc(mtl_content.length, mtl_content), "")

            // create a file to save as zip file
            // var FileSaver = require('file-saver');
            var file = new File([zip.toBuffer()], "inkerz_exported_3d_model.zip", { type: "text/plain;charset=utf-8" });

            // save it to user's default download location (please note: not prompt is supplied)
            FileSaver.saveAs(file);

        }

    }
    // when user click to export/save the edited 3D model to local file system
    clickHandler() {
        // exoport is restricted to .obj file type (until more 3d file exporters are developed)
        if (this.props.chosen_3d_format === 'OBJ') {

            var obj_text = ''

            var handle_data_pointer = this.handle_data
            var obj_parse_pointer = this.obj_parse
            var this_pointer = this

            // if we canread the base64 model ascii phone case data (obj URI encoded)
            // as stored in App.js chosen_phone_case property
            if (this.props.chosen_phone_case.indexOf("base64") > 0) {
                // read the pure ascii (removing the header)
                let obj_base64 = this.props.chosen_phone_case.split('base64,')[1]
                // convert the text to object type (ascii to binary)
                obj_text = atob(obj_base64)
                // send it off to be handled via handle_data() function
                handle_data_pointer(obj_text, obj_parse_pointer, this_pointer, 'model.obj')
            }
            else {
                // otherwise, as not having the ascii version of object file means we have just loded the obj file from
                // server, we need to fetch said server data (in our case our own url, where the assets are)
                let url = window.location.href.replace(/[^/]*$/, '') // remove any html files after directory
                // console.log("URL is", url)
                url = url + '/assets/' + this.props.chosen_phone_case + ".obj"
                // let url = window.location.protocol + '//' + window.location.host + window.location.pathname + '/assets/' + this.props.chosen_phone_case + ".obj"
                //console.log("url is", url)
                //console.log("pathname", window.location.pathname)
                // fetch is used 
                fetch(url)
                    .then(function (response) {
                        //to extract the text from it
                        return response.text();
                    })
                    .then(function (data) {
                        // send for post processing and download 
                        handle_data_pointer(data, obj_parse_pointer, this_pointer, this_pointer.props.chosen_phone_case)
                    })
            }
        }
        else {
            alert("Export format currently not supported!")
        }

    }
    render() {
        return (
            <div className="export-control">
                <div className="">
                    <button
                        className="select-3d"
                        onClick={this.showMenu}
                        style={{ backgroundImage: "url(images/select-arrow.png)", backgroundRepeat: 'no-repeat' }}>
                        {this.state.fotmatTitle}
                    </button>
                    <button ref="download" className="exportButton" onClick={() => this.clickHandler()}>Export 3D Model</button>
                    {
                        this.state.showMenu
                        ? (
                        <div className="exportMenu" ref={(element) => { this.dropdownMenu = element; }}>
                            <button className="exportMenuItem" onClick={() => {this.props.on3DFormatSelect(""); this.setState({ fotmatTitle: "Export Format"}); this.setState({ showMenu: false }, () => {document.removeEventListener('click', this.closeMenu)})}}>Export Format</button>
                            <button className="exportMenuItem" onClick={() => {this.props.on3DFormatSelect("OBJ"); this.setState({ fotmatTitle: "OBJ"}); this.setState({ showMenu: false }, () => {document.removeEventListener('click', this.closeMenu)})}}>.OBJ</button>
                            <button className="exportMenuItem" onClick={() => {this.props.on3DFormatSelect("GBL"); this.setState({ fotmatTitle: "GLB"}); this.setState({ showMenu: false }, () => {document.removeEventListener('click', this.closeMenu)})}}>.GLB</button>
                        </div>
                        )
                            : (
                            null
                        )
                    }
        </div>
         </div>
        )
    }
}

export default ExportControl
