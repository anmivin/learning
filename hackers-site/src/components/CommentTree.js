import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 10px;
  padding-left: 20px;
  background-color: lightpink;
  margin: 5px;
`;
const Username = styled.div`
  font-weight: bold;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Button = styled.button`
  border: thick double Cyan;

  &:hover {
    cursor: pointer;
  }
`;

const Tree = ({ data = [] }) => {
  return (
    <Div>
      <Ul>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </Ul>
    </Div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisible] = useState(false);

  const hasChild = node.comments.length !== 0 ? true : false;

  const changeVisibility = () => {
    setChildVisible(!childVisible);
  };
  return (
    <li>
      <Username>{node.user}</Username>

      <Div dangerouslySetInnerHTML={{ __html: node.content }} />

      <Div>
        {node.time_ago} {node.comments_count} comments{' '}
        {hasChild ? <Button onClick={() => changeVisibility()}>{childVisible ? '^' : 'v'} </Button> : ''}
      </Div>

      {hasChild && childVisible && (
        <Div>
          <Ul>
            <Tree data={node.comments} />
          </Ul>
        </Div>
      )}
    </li>
  );
};

export default Tree;
