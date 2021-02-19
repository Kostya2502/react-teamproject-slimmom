import styled from "styled-components";

export const LI = styled.li`
    margin-bottom:20px;
    display:flex;
    width: 100%;


    @media screen and (min-width:768px){
        margin-bottom:15.5px;
    }
    @media screen and (min-width:1280px){
        justify-content: space-between;
    }

    .innerListDairyProduct{
        width: 100%;
        display:flex;
        list-style: none;
        justify-content:space-between;
    }


    .innerItemDairyProduct{
        display:flex;
        justify-content: center;


        align-items: center;
        padding-bottom:5px;
        font-family: Verdana;
        font-style: normal;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.04em;

        color: #212121;
        border-bottom:1px solid #E0E0E0;

    }

    .innerItemDairyProduct:first-child{
            justify-content: flex-start;
            width: 100px;
            margin-right: 5px;
    
        @media screen and (min-width:768px){
            min-width: calc(100% - 104px - 20px - 104px - 50px);
            margin-right: 10px;
        }
        
        @media screen and (min-width:1280px){
            width:200px;
        }
    }
    .innerItemDairyProduct:nth-child(2){
        width:50px;
        margin-right: 5px;

        @media screen and (min-width:768px){
            width:109px;
            margin-right: 10px;
        }

        @media screen and (min-width:1280px){
            margin-right: 0;
        }
    }
    .innerItemDairyProduct:last-child{
        border: none;
    } 

    .buttonItemDairyProduct{

        width: 20px;
        height:20px;
        background-color:transparent;
        border-color:transparent;

        &:hover,&:focus{
        border: 2px solid orange; 
        border-radius: 20px;
        color: orange;
        }

        color: grey;
        transform: translateY(1px);

        @media screen and (max-width: 767px){
            transform: translateX(5px);
        }
    }
`