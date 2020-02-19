import React, { useEffect } from 'react';
import {Spinner,Container, Content, Grid} from 'native-base';

import styles from './style';
import {LOGIN} from '../../consts';

export default ({ navigation }) => {
    
    useEffect(() => {
        navigation.navigate(LOGIN);
    });
    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Spinner color="blue"/>
                </Grid>
            </Content>
        </Container>
    );
};