import React from "react";
import {
  OptionWrap,
  Option,
  OptionTitleWrap,
  OptionNumber,
  OptionTextWrap,
  OptionText,
  OptionSubText,
  FileInput,
} from "./styledComponent";

const Order_3 = () => {
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
          <FileInput type="file"></FileInput>
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
