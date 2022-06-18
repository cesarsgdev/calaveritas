import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  ${({ height }) =>
    height ? "height:" + height + ";" : "height: fit-content;"}
  min-height: 100%;
  max-width: 2500px;
  margin: auto;
  ${({ flex }) => (flex ? "display: flex;" : "")}
  ${({ grid }) => (grid ? "display: grid;" : "")}
  ${({ flow }) => (flow ? "flex-flow:" + flow + ";" : "")}
  ${({ justify }) => (justify ? "justify-content:" + justify + ";" : "")}
  ${({ align }) => (align ? "align-items:" + align + ";" : "")}
  ${({ gap }) => (gap ? "gap:" + gap + ";" : "")}
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 500px 500px 500px;
  gap: 20px;
  ${({ pd }) => (pd ? "padding:" + pd + ";" : "padding:20px;")}
`;
