import React, { useState } from 'react';
import { Button, Pane, SideSheet, Paragraph, Heading, IconButton, Card, Text, MenuIcon, ArrowLeftIcon, PersonIcon } from 'evergreen-ui';
import {Switch as Toggle} from 'evergreen-ui';
import data from '../data/data.json';
import { Switch, Route, Link } from 'react-router-dom';

function Dashboard(props) {

        const [state, setState] = useState(false);
        const [tuned, setTuned] = useState({checked:false});
        const [currCar, setCurrCar] = useState(null);
        
        return (
                <div className="App">           
                         <Pane display="flex" padding={16} background="tint1" borderRadius={15}>
                                <Pane flex={1} alignItems="center" display="flex" >
                                        <IconButton marginRight={15} icon={MenuIcon} appearance="minimal" onClick={() => setState({ isShown: true })} />
                                        <Link to={`/`} style={{textDecoration:'none'}}><Heading size={600}>AUTOBOOK</Heading></Link>
                                </Pane>
                        </Pane>       
                        <div className="container">
                        <SideSheet
                                isShown={state.isShown}
                                position="left"
                                width={400}
                                onCloseComplete={() => setState({ isShown: false })}
                                containerProps={{
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column'
                                }}
                        >
                                <Pane id="sidebar" zIndex={1} flexShrink={0} elevation={0}>
                                <Pane padding={16}>
                                <IconButton marginRight={15} icon={ArrowLeftIcon} appearance="minimal" onClick={() => setState({ isShown: false })} /><br></br>
                                <Heading size={600}>AUTOBOOK</Heading>
                                <Paragraph size={400}>
                                This is a magazine collection of Automobile Custom Tunes.
                                </Paragraph>
                                </Pane>
                                </Pane>
                                <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                                <Card
                                elevation={0}
                                height={240}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                >
                                <Heading >NO MORE MAGZINES ADDED</Heading>
                                <br></br>
                                <div style={{position:'absolute', bottom: '1em', margin:'0.5em'}}>This is a mock app build to provide a tutorial about how to use json data with React and Evergreen. <a href="https://github.com/yash11398" target='_blank'>Source Code on Github</a></div>
                                </Card>
                                </Pane>
                        </SideSheet>
                                <Switch>
                                        <Route path='/' exact>
                                        {data.map(car => (
                                        <Pane clearfix>
                                                <Link to={`/${car.name.replace(/\s+/g, '')}`}>
                                                <Pane onClick={()=>setCurrCar(car)} 
                                                borderRadius={5}
                                                elevation={1}
                                                float="left"
                                                backgroundColor="white"
                                                width={200}
                                                height={120}
                                                margin={24}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                                flexDirection="column"
                                                >
                                                        <img src={car.imgUrl} width={150} alt="Error"></img>
                                                        <Text size={300} fontWeight={800}>{car.name}</Text>
                                                </Pane>
                                                </Link>
                                        </Pane>
                                        ))}
                                        </Route>
                                        <Route path={`/:name`} exact>
                                                <Details></Details>
                                        </Route>
                                </Switch>
                        </div>
                </div>
        );

        function Details(){
                return(
                        <div>
                                <h1>{currCar.name}</h1>
                                <h5>{currCar.year}</h5>
                                <div>
                                <Toggle
                                        checked={tuned.checked}
                                        onChange={e => setTuned({ checked: e.target.checked })}
                                        style={{margin:'auto'}}
                                        />
                                </div>
                                <h5>{!tuned.checked?'STOCK':'TUNED'}</h5>
                                <hr></hr>
                                <h3 style={{fontStyle:"italic"}}>Horsepower : {!tuned.checked?currCar.horsepower+' BHP':currCar.tuned!==undefined?currCar.tuned.horsepower+' BHP':'---'}</h3>
                                <h3 style={{fontStyle:"italic"}}>Torque : {!tuned.checked?currCar.torque+' NM':currCar.tuned!==undefined?currCar.tuned.torque+' NM':'---'}</h3>
                                <h3 style={{fontStyle:"italic"}}>Drivetrain : {!tuned.checked?currCar.drivetrain:currCar.tuned!==undefined?currCar.tuned.drivetrain:'---'}</h3>
                                <Button marginY={8} iconAfter={PersonIcon}>Contact for details</Button>
                                <Text><br></br>These power figures or any mentioned services are mock, not real. This is only for education purpose, doesn't relate to any brand at all!</Text>
                        </div>
                );
        }
}

export default Dashboard;