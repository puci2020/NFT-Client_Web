import styled from 'styled-components';

const Input = styled.input`
    height: 40px;
    border: 1px solid transparent;
    border-radius: 24px;
    background-color: white;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.focus};
    padding: 0 16px;
    outline: none;
    width: ${({ width }) => (width || 'auto')};
    /* max-width: 50%; */

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.focus};
    }
`;
export default Input;
