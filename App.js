import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
 render() {
  return (
    <ScrollView style={styles.container}>
        <Text style={{fontSize:24}}> 
        During the period of Internet Explorer dominance in the early 2000s, 
        client-side scripting was stagnant. This started to change in 2004, 
        when the successor of Netscape, Mozilla, released the Firefox browser. 
        Firefox was well-received by many, taking significant market share from Internet Explorer.
        In 2005, Mozilla joined ECMA International, and work started on the ECMAScript for XML (E4X) standard.
        This led to Mozilla working jointly with Macromedia (later acquired by Adobe Systems), 
        who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. 
        The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, 
        Adobe Systems released the Tamarin implementation as an open source project. However, 
        Tamarin and ActionScript 3 were too different from established client-side scripting, 
        and without cooperation from Microsoft, ECMAScript 4 never reached fruition.
        Meanwhile, very important developments were occurring in open source communities not affiliated with ECMA work. 
        In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and 
        described a set of technologies, of which JavaScript was the backbone, 
        to create web applications where data can be loaded in the background, 
        avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, 
        spearheaded by open source libraries and the communities that formed around them. 
        Many new libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.
        The result was the ECMAScript 5 standard, released in December 2009.
        </Text>
    </ScrollView>
  );
 }
}
const styles = StyleSheet.create({
container: {
flex: 1,
}
});
