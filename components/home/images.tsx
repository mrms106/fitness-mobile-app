import React, { useRef } from "react";
import { View, Image, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";
import Carousel from "react-native-snap-carousel";

import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
import slide4 from '../../assets/images/slide4.png';
import slide5 from '../../assets/images/slide5.png';

const { width: screenWidth } = Dimensions.get('window');

export default function Imagecmp(): React.JSX.Element {
    const carouselRef = useRef(null);

    const images:ImageSourcePropType[] = [slide1, slide2, slide3, slide4, slide5];

    const renderItem = ({ item }: { item: ImageSourcePropType }) => (
        <View>
            <Image style={styles.image} source={item} />
        </View>
    );

    return (
        <View>
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={300}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.8}
                loop={true}
                vertical={false}
                autoplay={true}                         
                autoplayInterval={5000}   
                lockScrollWhileSnapping={true} 
                autoplayDelay={1000} 
                enableMomentum={false}              
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderRadius: 40,
        marginTop:20
    },
});
