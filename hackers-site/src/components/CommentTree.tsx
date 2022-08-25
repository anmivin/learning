import React, { useState } from 'react';
import styled from 'styled-components';
import { NewInterface } from './Interfaces';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Item = styled.div`
  margin-bottom: 15px;
  background-color: lightpink;
  padding: 15px 15px 15px 20px;
  border-radius: 5px;
  box-shadow: -1px -1px 2px black;
  font-size: 0.95em;
`;
const Username = styled.div`
  font-weight: bold;
`;
const ItemInfo = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 20px;
  font-size: 0.9em;
`;
const Div = styled.div`
  margin-top: 10px;
  padding-left: 30px;
`;
const Button = styled.button`
  margin-left: 10px;
  border-radius: 5px;
  border-style: none;
  box-shadow: -1px -1px 2px black;
  background-color: pink;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 2px MediumVioletRed;
    color: MediumVioletRed;
  }
`;

interface CommentProps {
  commentItem: NewInterface[];
}

interface NodeProps {
  nodeItem: NewInterface;
}

const Tree: React.FC<CommentProps> = ({ commentItem }) => {
  return (
    <Ul>
      {commentItem.map((tree) => (
        <TreeNode nodeItem={tree} />
      ))}
    </Ul>
  );
};

const TreeNode: React.FC<NodeProps> = ({ nodeItem }) => {
  const [childVisible, setChildVisible] = useState(false);
  const hasChild = !!nodeItem.comments.length;

  const changeVisibility = () => {
    setChildVisible(!childVisible);
  };
  return (
    <li>
      <Item>
        <Username>{nodeItem.user}</Username>
        <div dangerouslySetInnerHTML={{ __html: nodeItem.content }} />
        <ItemInfo>
          {nodeItem.time_ago} | {nodeItem.comments_count} comments{' '}
          {hasChild ? <Button onClick={() => changeVisibility()}>{childVisible ? 'hide' : 'show'} </Button> : ''}
        </ItemInfo>
        <Div>
          {hasChild && childVisible && (
            <Ul key={nodeItem.id}>
              <Tree commentItem={nodeItem.comments} />
            </Ul>
          )}
        </Div>
      </Item>
    </li>
  );
};

export default Tree;
