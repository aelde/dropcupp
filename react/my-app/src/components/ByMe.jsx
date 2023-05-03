import React from 'react'
import styled from 'styled-components'

const Bymee = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    background-color: #C82127;

    img {
        height: 30px;
    }

    .logolink img {
        height: 28px;
        margin-left: 10px;
    }

    .logolink img:hover {
        transform: scale(1.2);
        transition: transform 0.1s ease-in-out;
    }
    .ggg img:hover {
        transform: scale(1.2);
        transition: transform 0.1s ease-in-out;
    }
    .fff img:hover{
        transform: scale(1.2);
        transition: transform 0.1s ease-in-out;
    }
`


function ByMe() {
  return (
    <Bymee>
            <img className='me-img' src='/images/me.png' />
            <div className='logolink'>
              <a href='https://www.instagram.com/soupeggsoupeggs/?hl=en'>
                <img className='ig-img' src='/images/iglogo.png' />
              </a>
              <a href='https://twitter.com/_aelde'>
                <img className='twit-img' src='/images/twittlogo.png' />
              </a>
            </div>  
        </Bymee>
  )
}

export default ByMe