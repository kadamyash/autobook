import React, { useState } from 'react';
import { Button, Pane, Icon, SideSheet, Paragraph, Heading, IconButton, Card, Text, MenuIcon } from 'evergreen-ui';
import data from '../data/data.json';

function Dashboard(props) {

        const [state, setState] = useState(false);

        return (
                <div className="App">           
                         <Pane display="flex" padding={16} background="tint1" borderRadius={15}>
                                <Pane flex={1} alignItems="center" display="flex" >
                                        <IconButton marginRight={15} icon={MenuIcon} appearance="minimal" onClick={() => setState({ isShown: true })} />
                                        <Heading size={600}>AUTOBOOK</Heading>
                                </Pane>
                        </Pane>       
                        <div className="container">
                        <SideSheet
                                isShown={state.isShown}
                                position="left"
                                onCloseComplete={() => setState({ isShown: false })}
                                containerProps={{
                                display: 'flex',
                                flex: '1',
                                flexDirection: 'column',
                                }}
                        >
                                <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="#F0F5F5">
                                <Pane padding={16}>
                                <Heading size={600}>Title</Heading>
                                <Paragraph size={400}>
                                Optional description or sub title
                                </Paragraph>
                                </Pane>
                                </Pane>
                                <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                                <Card
                                backgroundColor="#F0F5F5"
                                elevation={0}
                                height={240}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                >
                                <Heading >Some content</Heading>
                                </Card>
                                </Pane>
                        </SideSheet>
                        {data.map(car => (
                        <Pane clearfix>
                                <Pane borderRadius={5}
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
                                        <img src={car.imgUrl} width={150}></img>
                                        <Text size={300}>{car.name}</Text>
                                </Pane>
                        </Pane>
                        ))}
                        </div>
                </div>
        );
}

export default Dashboard;