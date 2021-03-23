import React, {Component} from 'react';
import {View,FlatList,Text} from 'react-native';
class ComponentFlatlist extends Component {

    MyData=[
        {title:"bangladesh",subtitle:"The United States had limited contact with Bangladesh when it was a British colony, but established consular relations there after the formation of Pakistan. On April 4, 1972, the United States recognized Bangladesh."},
        {title:"Afghanistan",subtitle:"The United States recognized Afghanistan, then under the rule of King Amanullah, in 1921, and established diplomatic relations in 1935."},
        {title:"Albania",subtitle:"U.S.-Albanian diplomatic relations, first established in 1922, were interrupted when Italy took control of Albania’s foreign affairs in 1939. After Italy’s defeat in World War II, an informal US mission was sent to Albania in 1945 to study the possibility of reestablishing relations with the National Liberation Front (NLF) regime"},
        {title:"Algeria",subtitle:"At the time of American independence, Algiers was a nominal vassal of the Ottoman Empire with the power to conduct its own independent foreign relations. Algeria recognized the United States in 1795, although permanent diplomatic relations were not established until after Algeria emerged from subsequent French rule in 1962."},
        {title:"Andorra",subtitle:"The Principality of Andorra is a co-principality, with the Bishop of Urgell (Spain) serving as one of its co-princes and the French president serving as the other. The governing arrangement dates back centuries and helps to explain why, in conjunction with its geographic location"},
        {title:"Angola",subtitle:"The Portuguese first landed in what is today northern Angola in 1482, encountering the Kingdom of the Congo stretching from modern-day Gabon in the north to the Kwanza River in the south. The Portuguese gradually took control of the coastal area by a series of treaties and wars throughout the 16th century, and their interest in Angola quickly turned to the slave trade."},
        {title:"Antigua and Barbuda",subtitle:"The United States has enjoyed friendly relations with Antigua and Barbuda since its independence within the British Commonwealth of Nations in 1981. Because Antigua and Barbuda’s location near maritime transport lanes, the U.S. Virgin Islands and Puerto Rico make it an attractive site for international drug trafficking"},
        {title:"Argentina",subtitle:"After Argentina gained independence from the Spanish in 1816, the nation was paralyzed by tension between Centralist and Federalist forces. In 1854 the Federalist provinces ratified a constitution that established the Argentine Confederation"},
        {title:"Armenia",subtitle:"Between the 4th and the 19th centuries Armenia was conquered and ruled by, among others, Persians, Arabs, Byzantines, Mongols and Turks. While Armenia was under Ottoman rule the United States established a consulate in Ezerum"},
        {title:"Australia",subtitle:"On January 1, 1901, six colonies were joined together to create the Commonwealth of Australia, a self-governing Dominion in the British Empire. While the new nation was sovereign when it came to its domestic affairs"},
        {title:"Austria",subtitle:"Note: This entry is for the modern state, the Republic of Austria. Please click here for information on the Austrian Empire."},
        {title:"Austrian Empire",subtitle:"Note: This entry is for the former state, the Austrian Empire. Please click here for information on the modern Republic of Austria."},
        {title:"Azerbaijan",subtitle:"Located at the crossroads of European-Asian trading routes, Azerbaijan was fought over by Russian, Persian and Ottoman forces for centuries. After the collapse of the Russian Empire in 1917"},
        {title:"Madagascar",subtitle:"Relations between Madagascar (formerly the Malagasy Republic) and the United States date to the middle 1800s. John P. Finkelmeier was appointed Commercial Agent in Tamatave on February 13, 1866."},
        {title:"Malawi",subtitle:"The United States recognized Malawi on July 6, 1964, when the American consulate at Blantyre was elevated to Embassy status upon Malawi’s attainment of independence on the same date."},
        {title:"Malaysia",subtitle:"Relations between the United States and what is now the Federation of Malaya go back to the 19th century, when U.S. merchants traded at several Malaysian ports. However, it was not until the 20th century, particularly after Malaysian independence in 1957, that U.S.-Malaysian relations grew beyond this small-scale commerce"},
        {title:"Maldives",subtitle:"Maldives became independent from the British in 1965 and was recognized by the United States that same year. The United States does not have an embassy in Malé, the Maldivian capital; the Ambassador to Sri Lanka is also accredited to the Maldives."},
        {title:"Mali",subtitle:"The United States recognized the Federation of Mali on June 20, 1960, in a congratulatory message from President Dwight D. Eisenhower to President Modibo Keita."},
        {title:"Malta",subtitle:"Malta was a Crown Colony of the United Kingdom from 1814 until 1964, when it was granted independence and joined the British Commonwealth"},
        {title:"Marshall Islands",subtitle:"On June 25, 1983, four years after the Republic of the Marshall Islands became self-governing, the United States and the Marshall Islands began negotiations to sign the Compact of Free Association"},
        {title:"Mauritania",subtitle:"The United States recognized the Islamic Republic of Mauritania on November 28, 1960, in a congratulatory message from President Dwight D. Eisenhower to Prime Minister Daddah."},
        {title:"Mauritius",subtitle:"The United States recognized the Islamic Republic of Mauritania on November 28, 1960, in a congratulatory message from President Dwight D. Eisenhower to Prime Minister Daddah."},
        {title:"Mecklenburg-Schwerin",subtitle:"When the United States announced its independence from Great Britain in 1776, Mecklenburg-Schwerin was a sovereign, independent duchy. Although it joined the Confederation of the Rhine in 1808, it later joined the states allied against Napoleon"},
        {title:"Mecklenburg-Strelitz",subtitle:"When the United States announced its independence from Great Britain in 1776, Mecklenburg-Strelitz was a sovereign, independent duchy. Although it joined the Confederation of the Rhine in 1808, it later joined the states allied against Napoleon."},
        {title:"Mexico",subtitle:"Diplomatic relations between the United States and Mexico have been intimate and often contentious. At the outset, the issue of granting recognition to an independent Mexico divided American leaders such as Henry Clay and John Quincy Adams."},
        {title:"Micronesia",subtitle:"ollowing World War II, the Federated States of Micronesia, along with several other island nations, were part of the U.N. Trust Territory of the Pacific Islands, under U.S. administration. Micronesia achieved independence in 1986"},
    ];

    ChildView=(Childtitle,Childsubtitle)=>{
        return(
            <View style={{backgroundColor:'#000',padding:10,margin:5}}>
                <Text style={{color:'#fff',fontSize:18}}>{Childtitle}</Text>
                <Text style={{color:'#696765',fontSize:12}}>{Childsubtitle}</Text>
            </View>
        )
    };



    render() {
        return (
            <FlatList data={this.MyData} renderItem={({item})=><this.ChildView Childtitle={item.title} Childsubtitle={item.subtitle}/>}/>
        );
    }
}

export default ComponentFlatlist;
