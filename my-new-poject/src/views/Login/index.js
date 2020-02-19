import React from 'react';
import {Image} from 'react-native';
import {HOME} from '../../consts';
import { Container, Content, Text, Grid, Button } from 'native-base';

import styles from './style';

const GOOGLE_IMAGE = require('../../../assets/google.png');

export default function Login({navigation}) {
    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
               <Grid style={styles.grid}>
                <Text style={styles.title}>Benvingut!</Text>
                <Text style={styles.subtitle}>Inicia sessió per continuar</Text>
                <Button light style={styles.googleBtn} onPress={() => navigation.navigate(HOME)}>
                    <Image source ={GOOGLE_IMAGE} style={styles.googleIcon}/>
                    <Text>Google</Text>
                </Button>
               </Grid>
            </Content>
        </Container>
    );
};
    