/*This component controls the 3D file loading. */

import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader'

class LoadControl extends Component {

    state = {
        file: "",
        fileExtension: ""
    }

    // this function extract the colour from the loded mtl file
    // parsing all lines, effectively
    // parsing each line fromm the mtl file format, finding
    // newmtl file: material statement
    // Kd line : color statement
    // see: http://paulbourke.net/dataformats/mtl/
    mtl_parse = mtl_text => {

        let lines = mtl_text.split('\n')

        let materials = {}

        let i = 0
        let next_name = ''
        let next_color = ''

        while (i < lines.length) {
            while (i < lines.length) {
                if (lines[i] === undefined) {
                    break
                }
                if (lines[i].startsWith('newmtl')) {
                    next_name = lines[i].substring(6).trim()
                    break
                }
                else {
                    i++
                    continue
                }
            }
            if (next_name.length !== 0) {
                while (i < lines.length) {
                    if (lines[i] === undefined) {
                        break
                    }
                    if (lines[i].startsWith('Kd')) {
                        next_color = lines[i].substring(2).trim()
                        break
                    }
                    else {
                        i++
                        continue
                    }
                }
            }
            else {
                i++
                continue
            }
            if (next_name.length !== 0 && next_color.length !== 0) {
                materials[next_name] = next_color + ''
                next_name = ''
                next_color = ''
                i++
                continue
            }
            else {
                i++
                continue
            }
        }
        console.log(JSON.stringify(materials))
        return materials
    }

    // this function load the dataURI base64 string and forms the complete
    // file definition, to be loaded into App.js on3DFileLoad() bound function
    // note: file extension is fixed currently to obj.
    on_obj_load = e => {

        this.file = 'data:application/octet-stream;base64,' + btoa(this.obj_reader.result)
        this.fileExtension = 'obj'

        this.step = this.step + 1

        //this
        if (this.step >= 2) {
            this.props.on3DFileLoad(this.file, this.fileExtension, this.color) //load file upstream to App.js 
        }
    }

    // this function uses the result of read in mtl file read in and 
    // for colour and converts it to hex colour (as mtl file contains rgb colour definition)
    // to be sent upstream to App.js on3DFileLoad() bound function together with state of the file
    // and file extention
    on_mtl_load = e => {

        var mtl_string = this.mtl_reader.result


        //var this_pointer = this


        // console.log('mtl_string: ' + mtl_string)

        let colors = this.mtl_parse(mtl_string)

        let is_empty = Object.entries(colors).length === 0 && colors.constructor === Object

        let color = '#'

        if (!is_empty) {
            let rgb = Object.entries(colors)[0][1]
            let rgb_parts = rgb.split(' ')
            for (let j = 0; j < 3; j++) {
                color += (Math.round(parseFloat(rgb_parts[j].trim()) * 255) % 256).toString(16)
            }
        }
        else {
            color = '#000000'
        }

        this.color = color

        console.log('handleFiles: ' + color)


        this.step = this.step + 1

        //this
        if (this.step >= 2) {
            this.props.on3DFileLoad(this.file, this.fileExtension, this.color) //load file upstream to App.js 
        }

    }
    // function to handle files when user loads the files
    handleFiles = files => {

        // currently we expect both .mtl and .obj files
        if (files.length < 2) {
            alert("Unable to load!\nPlease select both .obj and .mtl files to load!\n")

        }
        // if both supplied, process both files (encoding obj file into stream base 64 
        // and extract material reference and colour from mtl file)
        else {

            this.step = 0
            this.file = ''
            this.fileExtension = ''
            this.color = ''

            var mtl_ready = false
            var obj_ready = false
            var obj_order = -1
            var mtl_order = -1
            //var color = '#'
            // each file is parswed to identifyy extention and make them marked as ready
            for (let i = 0; i < files.length; i++) {
                // console.log(files[i].name)
                // console.log(files[i].name.split('.').pop() === 'mtl' && !mtl_ready)
                // console.log(files[i].name.split('.').pop() === 'obj' && !obj_ready)
                if (files[i].name.split('.').pop() === 'obj' && !obj_ready) {
                    // console.log('obj: ' + files[i].name)
                    //console.log(files[i].base64[i]) /* remove just for logging */
                    obj_order = i;
                    obj_ready = true;
                    continue
                }
                if (files[i].name.split('.').pop() === 'mtl' && !mtl_ready) {
                    // console.log('mtl: ' + files[i].name)
                    mtl_order = i;
                    mtl_ready = true;

                }
            }
            // once both files are reqady, they are read in
            this.mtl_reader = new FileReader();
            this.obj_reader = new FileReader();
            // object encoding into base64 stream, and mtl extraction of 
            // material and colour
            // this is triggered using the FileLoader ability to
            // load the function on "onloadend" trigger event
            //  files as stepped loaded in (.mtl then .obj), read in as text (ascii)
            // then sent off for processing via on_mtl_load and obj_load functions
            this.mtl_reader.onloadend = this.on_mtl_load
            this.obj_reader.onloadend = this.on_obj_load
            this.mtl_reader.readAsText(files[mtl_order])
            this.obj_reader.readAsText(files[obj_order])

        }
    }

    render() {
        return (
            <div className="load-control">
                <ReactFileReader fileTypes={[".obj", ".json", ".mtl"]} multipleFiles={true} base64={false} handleFiles={this.handleFiles}>
                    <button className="loadButton">Load 3D Model</button>
                </ReactFileReader>
            </div >
        )
    }
}

export default LoadControl