import React, { useState } from 'react';
import styled from 'styled-components';
import { NewsItem } from '../types/types';
import { Button, Container, Paper, Typography } from '@mui/material';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Div = styled.div`
  margin-top: 10px;
  padding-left: 30px;
`;

interface CommentProps {
  commentItem: NewsItem[];
}

interface NodeProps {
  nodeItem: NewsItem;
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
      <Paper sx={{ boxShadow: '-1px -1px 2px black', backgroundColor: 'primary.dark' }}>
        <Typography variant="h6">{nodeItem.user}</Typography>
        <Typography variant="h5" dangerouslySetInnerHTML={{ __html: nodeItem.content }} />
        <Container
          sx={{
            justifyContent: 'start',
            paddingLeft: '20px',
            boxShadow: 'none',
            backgroundColor: 'inherit',
            padding: '15px',
          }}
        >
          <Typography variant="body2">
            {nodeItem.time_ago} | {nodeItem.comments_count} {nodeItem.comments_count == 1 ? 'comment' : 'comments'}
          </Typography>
          {hasChild ? (
            <Button sx={{ padding: '0px', margin: '0 0 0 15px' }} onClick={() => changeVisibility()}>
              <Typography variant="button" sx={{ fontSize: '0.8em' }}>
                {childVisible ? 'hide' : 'show'}
              </Typography>
            </Button>
          ) : (
            ''
          )}
        </Container>
        <Div>
          {hasChild && childVisible && (
            <Ul key={nodeItem.id}>
              <Tree commentItem={nodeItem.comments} />
            </Ul>
          )}
        </Div>
      </Paper>
    </li>
  );
};

export default Tree;
