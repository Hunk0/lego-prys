import React, {useState} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";

const useStyles = makeStyles((theme) => ({
      img: {
          cursor: 'pointer'
      },
  }));

function Carrousel({imageslist}) {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    console.log(imageslist)

    const images = imageslist.map(img => {
        const src = require(`../files/img/${img}`);

console.log(src);
        return {
            src: src
        }
    })

    const classes = useStyles();


    return (
        <div>
            <div>
            <ImageList sx={{ width: 500, height: 70 }} cols={6} rowHeight={4}>
                
                {images.map((image, index) => (
                    <ImageListItem key={index}>
                        <img
                            className={classes.img}
                            srcSet={`${image.src} 2x`}
                            src={image.src}
                            onClick={() => {
                                setIndex(index);
                                setIsOpen(true);
                            }}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <ReactImageCarouselViewer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                images={images}
                startIndex={index}
            />
        </div>
        </div>
    )
}

export default Carrousel