import Header from "../components/Header";
import Magnifier from "../components/Magnifier";
import { InputStyle } from "../type";
import {
  Categories,
  InputIcon,
  InputWrapper,
  SearchContainer,
  VerticalDivider,
} from "./MainPage";
import Input from "../components/Input";
import styled from "styled-components";
import SupplierCard from "../components/SupplierCard";
import { data } from "../const/data";

const MaterialPage = () => {
  return (
    <>
      <Header>
        <p>OmniChem</p>
        <SearchContainer>
          <Categories />
          <VerticalDivider />
          <InputWrapper>
            <Input
              styleType={InputStyle.DEFAULT}
              placeholder=""
              onChange={() => {}}
            />
          </InputWrapper>

          <InputIcon>
            <Magnifier />
          </InputIcon>
        </SearchContainer>
      </Header>
      <MaterialPageWrapper>
        <h2>{data.name}</h2>
        <DescriptionBlock>
          <Description>{data.descriptionHeader}</Description>
          <MaterialFeatures>
            {data.description.map(({ key, value }) => (
              <FeatureLine key={key}>
                <FeatureName>{key}: </FeatureName>
                {value}
              </FeatureLine>
            ))}
          </MaterialFeatures>
        </DescriptionBlock>
        <Line />
        <h2>Suppliers:</h2>

        <ScrollableList>
          {data.suppliers.map((supplier) => {
            const items = [
              {
                key: "1",
                label: supplier.supplierName,
                children: (
                  <div>
                    <p>Seller city: {supplier.city}</p>
                    <p>Legal entity: {supplier.legalEntity}</p>
                    <p>Main advantages: {supplier.mainAdvantages}</p>
                    <p>Brief description: {supplier.briefDescription}</p>
                  </div>
                ),
              },
            ];
            return <SupplierCard items={items} />;
          })}
        </ScrollableList>
      </MaterialPageWrapper>
      <FullSpecsWrapper>
        <h2>Identification & Functionality</h2>
        {data.IdentificationAndFunctionality.map(({ key, value }) => (
          <FeatureLine key={key}>
            <FeatureName>{key}: </FeatureName>
            {value}
          </FeatureLine>
        ))}
        <Line />
        <MolecularStructureBlock>
          <FeatureName>{data.molucalarPicture.key}</FeatureName>
          <img
            src={data.molucalarPicture.value}
            alt="Molecular Structure picture"
          ></img>
        </MolecularStructureBlock>
        <Line />
        <h2>Features & Benefits</h2>
        {data.FeaturesAndBenefits.map(({ key, value }) => (
          <FeatureLine key={key}>
            <FeatureName>{key}: </FeatureName>
            {value}
          </FeatureLine>
        ))}
        <Line />
        <h2>Applications & Uses</h2>
        {data.ApplicationsAndUses.map(({ key, value }) => (
          <FeatureLine key={key}>
            <FeatureName>{key}: </FeatureName>
            {value}
          </FeatureLine>
        ))}
        <Line />
      </FullSpecsWrapper>
    </>
  );
};

const MaterialPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 120px 10px 120px;
`;

const Line = styled.div`
  border-bottom: 1px solid #2a2b2d;

  margin: 20px 0 20px 0;
`;

const MolecularStructureBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const FullSpecsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 120px 10px 120px;

  height: auto;

  background-color: #fbfbfb;
`;

const Description = styled.p`
  margin: 20px 0 20px 0;

  font-weight: 200;
  word-spacing: 1px;
  color: #2a2b2d;
`;

const DescriptionBlock = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 800px;
`;

const MaterialFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FeatureLine = styled.p`
  color: #505050;
`;

const FeatureName = styled.span`
  font-weight: 700;
`;

const ScrollableList = styled.div`
  width: 100%;
  margin: 30px 0;
  padding: 10px;

  display: flex;
  flex-direction: row;
  gap: 20px;

  scroll-behavior: smooth;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.2) inset;
`;
export default MaterialPage;
