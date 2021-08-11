import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonTemplate = ({className, children, ...props}) => (
  <Button className={className} {...props}>
      {children}
  </Button>
);

const VerticalButton = styled(ButtonTemplate)`
  transform:rotate(${props => props.$topdown ? '90deg' : '-90deg'});
  -webkit-transform:rotate(${props => props.$topdown ? '90deg' : '-90deg'});
`;

const VerticalAnchorButton = styled(VerticalButton)`
  position: absolute;
  top: 50%;
  left: ${props => props.$left ? '0' : 'inherit'};
  right: ${props => props.$right ? '0' : 'inherit'};
`;

const HorizontalAnchorButton = styled(ButtonTemplate)`
  position: absolute;
  top: ${props => props.$top ? '0' : 'inherit'};
  bottom: ${props => props.$bottom ? '0' : 'inherit'};
  left: 50%;
`;

const AnchorButton = (props) => {
  if (props.$left || props.$right)
    return (<><VerticalAnchorButton {...props} /></>);
  
  return (<><HorizontalAnchorButton {...props} /></>);
};

export default AnchorButton;