
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                        <Accordion.Body>
                            Access Token: An access token is a credential that is used to authenticate and authorize a client  when accessing protected resources on a server.

                            Refresh Token: A refresh token is a credential that is used to obtain a new access token once the previous access token expires.Refresh tokens are valuable because they can be securely stored and used to obtain new access tokens.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Compare SQL and NoSQL databases?</Accordion.Header>
                        <Accordion.Body>
                            SQL: SQL databases use a rigid, predefined schema where data is organized into tables with fixed columns and rows. The relationships between tables are typically defined using foreign keys.
                            NoSQL: NoSQL databases have a flexible schema, allowing for dynamic and varying data structures. They can be document-based, key-value pairs, columnar, or graph-based, offering greater flexibility in data representation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is express js? What is Nest JS?</Accordion.Header>
                        <Accordion.Body>
                        Express.js is a minimalist web framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs. 
                        Nest.js is a progressive, extensible, and opinionated framework for building efficient and scalable server-side applications with Node.js and TypeScript.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is MongoDB aggregate and how does it work?</Accordion.Header>
                        <Accordion.Body>
                        In MongoDB, the aggregate function is a powerful tool used for data aggregation and analysis. It allows you to perform complex operations on collections of documents and retrieve aggregated results based on specified criteria. The aggregate function works by processing data through a series of stages.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;