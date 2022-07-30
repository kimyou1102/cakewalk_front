import styled from 'styled-components';

// Order_3.jsx
export const OptionWrap = styled.div`
    display: flex;
    width: 960px;
    margin: 0 auto;
`
export const Option = styled.div`
    width: 480px;
`

export const OptionTitleWrap = styled.div`
    display: flex;
`

export const OptionNumber = styled.span`
    font-size: 60px;
    color: #767676;
    margin-right: 9px;
`

export const OptionTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const OptionText = styled.span`
    font-size: 20px;
`

export const OptionSubText = styled.span`
    font-size: 15px;
    color: #515151;
`

export const OptionContents = styled.div`
    width: 433px;
    margin: 0 auto;
`

export const FileForm = styled.form`

`

export const FileInput = styled.input`
    visibility: hidden;
    width: 0px;
`
export const FileLabel = styled.label`
    width: 108px;
    height: 32px;
    background-color: #FFE5E5;
    cursor: pointer;
    padding: 4px 20px;
    border-radius: 5px;
    border: 1px solid black;
`

export const FileName = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: 316px;
    height: 32px;
    margin-left: 11px;
    padding: 0 10px;
    color: #999999;
    vertical-align: middle;
    border: 1px solid #dddddd;
`

export const RequireTextarea = styled.textarea`
    width: 100%;
    height: 98px;
    box-sizing: border-box;
    resize: none;
    margin-top: 10px;
    background-color: #EFEDED;
    border: none;
    padding-top: 9px;
    padding-left: 16px;
    &:focus {
        outline: none;
      }
`
export const AttachedImgDiv = styled.div`
    width: 100%;
    height: 267px;
    margin-top: 11px;
    background-color: #EFEDED;
` 
export const DetailOption = styled.div`
    width: 417px;
    height: 346px;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    padding: 32px 45px 0 44px;
`

export const OrderButton = styled.button`
    width: 417px;
    height: 56px;
    background-color: #FFE5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 19px;
    box-sizing: border-box;
    margin-top: 12px;
    border: none;
    cursor: pointer;
`

export const RadioBtnForm = styled.form`
    display: ${(props)=> props.isInline ? 'inline' : ''};
    margin-left: ${(props) => props.num};
`

export const RadioBtn = styled.input.attrs({ type: 'radio'})`
    margin-left: 10px;
`

export const CheckBtn = styled.input.attrs({ type: 'checkbox' })`
`

export const Label = styled.label`
    display: block;
`
export const CountInput = styled.input`
    width: 30px;
    border: none;
    border-bottom: 1px solid black;

    &:focus {
        outline: none;
      }
`

export const DetailOptionText = styled.span`
    display: ${(props) => props.isBlock ? 'block' : ''}
`

export const DetailOptionSubText = styled.p`
    font-size: 13px;
    text-align: right;
`

export const Select = styled.select`
    width: 212px;
    margin-left: 34px;
`

export const AdtnlOptionWrap = styled.div`
    display: flex;
    margin-top: 17px;
`

// Nav.jsx
export const NavDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    position: fixed;
    background-color: white;
    border-bottom : ${(props) => props.isBorder ? '1px solid #e5e8eb' : ''};
`

export const LogoImg = styled.img`
    width: 100px;
    height: 60px;
`

export const NavUl = styled.ul`
    display: flex;
    margin: 0;
    list-style: none;
`

export const NavLi = styled.li`
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 60px;
`