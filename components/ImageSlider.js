import React, { useState, useEffect } from 'react'
import {
  View,
  Image,
  Switch,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native'

const images = [
  require('../media/01.jpg'),
  require('../media/02.jpg'),
  require('../media/03.jpg'),
  require('../media/04.jpg'),
  require('../media/05.jpg'),
  require('../media/06.jpg'),
  require('../media/07.jpg'),
  require('../media/08.jpg'),
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSlideshowEnabled, setIsSlideshowEnabled] = useState(false)

  useEffect(() => {
    let slideShowInterval

    if (isSlideshowEnabled) {
      slideShowInterval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length)
      }, 2000)
    } else {
      clearInterval(slideShowInterval)
    }

    return () => clearInterval(slideShowInterval)
  }, [isSlideshowEnabled, currentIndex])

  const onNextPress = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const onPrevPress = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const ButtonComponent = ({ onPressEvent, displayText }) => {
    return (
      <Pressable style={styles.button} onPress={onPressEvent}>
        <Text style={styles.text}>{displayText}</Text>
      </Pressable>
    )
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'black',
          paddingVertical: 20,
        }}
      >
        <ButtonComponent onPressEvent={onPrevPress} displayText="Previous" />
        <View style={{ backgroundColor: '#eee', paddingHorizontal: 20 }}>
          <Switch
            value={isSlideshowEnabled}
            onValueChange={setIsSlideshowEnabled}
            style={styles.switch}
          />
        </View>
        <ButtonComponent onPressEvent={onNextPress} displayText="Next" />
      </View>
      <Image
        source={images[currentIndex]}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 2,
    elevation: 5,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
})

export default ImageSlider
