import styled from 'styled-components';
import defaultTheme from '../../theme';

// ${({ theme }) => theme.botBubbleColor}

const OptionElement = styled.a`
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.botBubbleColor};
  display: inline-block;
  font-size: 14px;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.botBubbleColor};

  &:hover { opacity: .7; }
`;

OptionElement.defaultProps = {
  theme: defaultTheme,
};

export default OptionElement;
