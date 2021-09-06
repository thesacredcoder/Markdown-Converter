import React, { useContext } from "react";
import styled from "styled-components";

import editorContext from "../editorContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 14px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  font-family: "Lato", sans-serif;
  margin-bottom: 1rem;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export default function MarkedInput() {
  const { markdownText, setMarkdownText } = useContext(editorContext);
  const onInputChange = (e) => {
    const newValue = e.target.value;
    setMarkdownText(newValue);
  };
  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
}
