import React, { useState } from "react";
import { InputStyle, ButtonStyle } from "../../type";
import { DrowerFormWrapper, InputFormWrapper } from "./Components";

import Button from "../../components/Button";

import Input from "../../components/Input/Input";
import styled from "styled-components";
import isInn from "is-inn-js";

interface SamplesFormProps {
  onSubmit: () => void;
}

const SamplesForm: React.FC<SamplesFormProps> = ({ onSubmit }) => {
  const [numOfSamples, setNumOfSamples] = useState("");
  const [market, setMarket] = useState("");
  const [requestComments, setRequestComments] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [commentsOnDelivery, setCommentsOnDelivery] = useState("");
  const [individualTaxpayerNumber, setIndividualTaxpayerNumber] = useState("");

  return (
    <DrowerFormWrapper>
      <FormsContainer>
        <h2>Request details</h2>
        <p>Number of samples requested</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setNumOfSamples}
            value={numOfSamples}
          />
        </InputFormWrapper>
        <p>Input your market</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setMarket}
            value={market}
          />
        </InputFormWrapper>
        <p>Request comments</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setRequestComments}
            value={requestComments}
          />
        </InputFormWrapper>
        <h2>Delivery info</h2>
        <p>Input contact person</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setContactPerson}
            value={contactPerson}
          />
        </InputFormWrapper>
        <p>Delivery address</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setDeliveryAddress}
            value={deliveryAddress}
          />
        </InputFormWrapper>
        <p>Input phone number</p>
        <InputFormWrapper>
          <Input
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="+7/8 (999) 999 99 99"
            styleType={InputStyle.BORDERED}
            maxLength={12 || 11}
          />
          {(phoneNumber[0] === "+" &&
            phoneNumber.length === 12 &&
            phoneNumber[1] === "7") ||
          (phoneNumber[0] === "8" && phoneNumber.length === 11) ? (
            <p>Number is valid</p>
          ) : (
            <p>Number is not valid</p>
          )}
        </InputFormWrapper>

        <p>Comments on delivery</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setCommentsOnDelivery}
            value={commentsOnDelivery}
          />
        </InputFormWrapper>
        <p>Input individual taxpayer number</p>
        <InputFormWrapper>
          <Input
            styleType={InputStyle.BORDERED}
            placeholder=""
            onChange={setIndividualTaxpayerNumber}
            value={individualTaxpayerNumber}
          />
          {isInn(individualTaxpayerNumber) ? (
            <p>INN valid</p>
          ) : (
            <p>INN not valid</p>
          )}
        </InputFormWrapper>
      </FormsContainer>

      <Button
        disabled={!isInn(individualTaxpayerNumber)}
        styleType={ButtonStyle.BLUE}
        text="Submit"
        onClick={onSubmit}
      />
    </DrowerFormWrapper>
  );
};

const FormsContainer = styled.div``;

export default SamplesForm;
