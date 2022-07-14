import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

function InputField(props){

    const [input, setInput] = useState('');

    const [output, setOutput] = useState('Output Here');

    function tab(e){
        if(e.keyCode == 9 || e.which ==9){
            e.preventDefault();
            let temp = input;
            temp += "\t";
            setInput(temp);
        }
    }

    function handleSubmit(e){

        e.preventDefault();
        let nextWord = false
        let temp = '';

        if(input)
        {
        const sentences = input.split(' ');

        for(let sentence of sentences){
            sentence = capitalizer(sentence);
            nextWord = false

            for(let char of sentence){
                if(char == ' '||char== '\n'||char == '?'||char == '\t'||char == '\r'||char == ','||char == ";"||char == '.'||char == '!'||char == '?')
                {
                    nextWord = true;
                    temp += char;
                }
                else{
                    if(nextWord && char.toUpperCase != char.toLowerCase())
                    {
                        temp += char.toUpperCase();
                        nextWord = false;
                    }
                    else{
                        temp += char;
                    }
                }
            }
            temp += ' ';
            nextWord = true;
        }
    }
    setOutput(temp);
    }

    function capitalizer(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div>
            <Form>
                <Form.Group>
                <Form.Label>Text Input</Form.Label>
                <Form.Control as="textarea" onKeyDown = {tab} onChange ={e => setInput(e.target.value)} value = {input} id = {props.id} rows = {4}/>
                <pre id = "output">{output}</pre>
                </Form.Group>
                <Button variant="dark" type="submit" onClick = {handleSubmit}>Capitalize</Button>
            </Form>
        </div>

    );
}

export default InputField;