import React from 'react'
// import { useState, useEffect } from 'react';
import { useState } from 'react';
// import Display from './Display'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
// import Result from './Result'
import Audience from './Audience'
import Product from './Product'
import Features from './Features'


const { Configuration, OpenAIApi } = require("openai");



const Home = () => {
    // const [prompt, setPrompt] = useState({userInput: ''});
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');

    async function onSubmit(event) {
        event.preventDefault();
        const response = await fetch('/api/generate', {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({post: prompt}),
        });
        const data = await response.json();
        setResult(data.result);
        setPrompt('');
    }


const configuration = new Configuration({
    apiKey:'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',
      });
    const openai = new OpenAIApi(configuration);
    
    const generatePost = async () => {
        
        const res = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: 
            `Generate a custom social media post for a ${Features} ${Product}  that is targeted towards ${Audience}.\n`,
            temperature: 0.8,
            max_tokens: 280,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
        

        setResult(res.data.data[0].url);
    };

        return (
            <div>
                <Container>
                    <h1 className='home-title'> Social Media Post Generator</h1>
                    <p className='sub-title'>Follow the steps below to generate a social media post!</p>
            <Row>
                <Col>
                
                <Product
                       product={Product}             
                    />
                </Col>
                <Col>
                <Audience

                    audience={Audience}               
                    />
                </Col>
                <Col>
                <Features
                    features={Features}           
                    />
                </Col>
                {/* <Button variant="primary" size="lg" type="submit" className='submit-post button-33'>Submit</Button> */}
                {/* <Col> */}
                {/* <Result 
                                        
                    /> */}
                {/* </Col> */}
            </Row>
            <div className="result-main">
                <h3>TESTING</h3>
                <input
                    className="result-input"
                    placeholder="blahblahblah"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <Button onClick={generatePost}>Generate Post</Button>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                         <Form.Label htmlFor='result'></Form.Label>
                       <Form.Control
                            type='text'
                            as='textarea'
                            rows={6}
                            name='result'
                            // onChange={handleInputChange}
                            value={setResult}
                            
                            />
                </Form.Group> 
                </Form>
                {result.length > 0 ? (
                                <textarea src={result} alt="postResult" />
                                ) : (
                                  <></>
                                )}
            </div>

                </Container>
            </div>
        );
    }


export default Home;