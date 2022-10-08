import styled from "styled-components"

export const ContactWrapper = styled.div`
    
    text-align: center;
    

#content{
    
    display: flex;
    
    justify-content: center;
    z-index: 100;
    align-items: center;
}



h1{
  font-size:4rem;
}
`


export const Form = styled.form`
    width:100%;
    height:100vh;

    background-image: url('https://wallpapers.com/images/hd/blade-runner-2049-joi-and-k-iaqoc5hsh9dm06v0.jpg'); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;


    input , textarea{
        padding:0.5rem;
        font-size:1.2rem;

        color:white;
        
        background-color:#303030;
    }

    button{
        background-color: #4a268d;
        color: white;

        height: 3rem;
        width: 30%;

        margin-top:1.5rem;

        font-size: 25px;

        border-radius: 10px;
        border: none;
        font-weight: 400;

        opacity: 0.5;
        transition: 0.5s;

        &:hover {
            opacity: 1;
            color: white;
            cursor: pointer;
        }
    }


    label{
        padding:0.5rem;
        font-size:1.8rem;
    }

`