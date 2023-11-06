import {
  Title,
  ContainerList,
  CardContainer,
  ButtonContainer,
  Label, ProgressContainer, ProgressBar,
  Buttons,
} from "./style";

export const ProfileExpert = () => {
  return (
    <>
      <Title>Full Profile</Title>
      <ContainerList>
        <CardContainer>
          <div>
            <img src="" alt="" />
          </div>
          <ProgressContainer>
            <Label htmlFor="file">Affection level</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Child friendly</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Dog friendly</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Energy level</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Grooming</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Social needs</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Vocalisation</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ProgressContainer>
            <Label htmlFor="file">Hypoallergenic</Label>
            <ProgressBar id="file" value="32" max="100"></ProgressBar>
                  </ProgressContainer>
                  
          <ButtonContainer>
            <Buttons>＋</Buttons>
            <Buttons to={"/Catalog"}>Go back</Buttons>
                  </ButtonContainer>
                  
        </CardContainer>
      </ContainerList>
    </>
  );
};
