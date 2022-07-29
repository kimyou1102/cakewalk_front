import React, { useState } from "react";
import {
  OptionWrap,
  Option,
  OptionTitleWrap,
  OptionNumber,
  OptionTextWrap,
  OptionText,
  OptionSubText,
  OptionContents,
  FileForm,
  FileInput,
  FileLabel,
  FileName,
  RequireTextarea,
  AttachedImgDiv,
  OrderButton,
  DetailOption,
  RadioBtn,
  Label,
  DetailOptionText,
  DetailOptionSubText,
  RadioBtnForm,
  Select,
  AdtnlOptionWrap,
  CountInput,
  CheckBtn
} from "./styledComponent";

const Order_3 = () => {
  const [fileName, setFileName] = useState('첨부파일');
  const onChange = (e) => {
    setFileName(e.target.value);
  }

  return (
    <>
      <OptionWrap>
        <Option>
          <OptionTitleWrap>
            <OptionNumber>3</OptionNumber>
            <OptionTextWrap>
              <OptionText>케이크 선택하기</OptionText>
              <OptionSubText>
                디자인한 케이크 도안을 선택해주세요.
              </OptionSubText>
            </OptionTextWrap>
          </OptionTitleWrap>
          <OptionContents num="418px">
            <FileForm action="#" method="post" encType="multipart/form-data">
              <FileLabel htmlFor="input-file">파일찾기</FileLabel>
              <FileInput type="file" id="input-file" onChange={onChange} ></FileInput>
              <FileName>{fileName}</FileName>
            </FileForm>
            <RequireTextarea placeholder="주문 시 요청사항을 적어주세요." />
            <AttachedImgDiv></AttachedImgDiv>
          </OptionContents>
        </Option>

        <Option>
          <OptionTitleWrap>
            <OptionNumber>4</OptionNumber>
            <OptionTextWrap>
              <OptionText>상세옵션 선택하기</OptionText>
              <OptionSubText>
                케이크 주문 관련 상세옵션을 선택해주세요.
              </OptionSubText>
            </OptionTextWrap>
          </OptionTitleWrap>
          <OptionContents>
            <DetailOption>
                <DetailOptionText>* 케이크 호수</DetailOptionText>
                <RadioBtnForm action="#" num="10px" isInline>
                    <RadioBtn value="mini" name="size"/>미니
                    <RadioBtn value="one" name="size" />1호
                    <RadioBtn value="two" name="size" />2호
                    <RadioBtn value="three" name="size" />3호
                </RadioBtnForm>
                <DetailOptionSubText>케이크 기본 가격) 미니: 2만원대</DetailOptionSubText>
                <DetailOptionSubText>1호 : 4~6만원대</DetailOptionSubText>
                <DetailOptionSubText>2호 : 5~7만원대</DetailOptionSubText>
                <DetailOptionSubText>3호 : 7~9만원대</DetailOptionSubText>
                <DetailOptionText>* 케이크 맛</DetailOptionText>
                <Select>
                    <option>케이크 맛을 선택하세요</option>
                    <option>맛1</option>
                    <option>맛2</option>
                    <option>맛3</option>
                </Select>
                <AdtnlOptionWrap>
                    <DetailOptionText isBlock>추가옵션</DetailOptionText>
                    <RadioBtnForm action="#" num="34px">
                        <Label>
                            <RadioBtn value="candle" name="add" />초 추가<CountInput />개
                        </Label>
                        <Label>
                            <RadioBtn value="Ballon" name="add" />풍선 추가
                        </Label>
                        <Label>
                            <RadioBtn value="addIce" name="add" />보냉백 추가
                        </Label>
                    </RadioBtnForm>
                </AdtnlOptionWrap>
            </DetailOption>
            <OrderButton>주문하기</OrderButton>
          </OptionContents>
        </Option>
      </OptionWrap>
    </>
  );
};

export default Order_3;

/* <OptionWrap>
                <Option>
                    <OptionTitleWrap>
                        <OptionNumber>3</OptionNumber>
                        <OptionTextWrap>
                            <OptionText>케이크 선택하기</OptionText>
                            <OptionSubText>디자인한 케이크 도안을 선택해주세요.</OptionSubText>
                        </OptionTextWrap>
                    </OptionTitleWrap>
                </Option>
                <Option>상세옵션 선택하기</Option>
            </OptionWrap>  */
