import React from 'react';
import Vector from '../public/Vector.svg';
import Left from '../public/Left.svg';
import Right from '../public/Right.svg';
import Ok from '../public/Ok.svg';
import { motion } from 'framer-motion';

const OpenChat: React.FC = () => {
  return (
    <div style={{ position: 'relative', top: '30%', left: '30%' }}>
      <motion.div
        style={{ position: 'relative', bottom: '100%', left: '0%' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 1, duration: 4, repeatDelay: 0 }}
      >
        <Vector />
      </motion.div>

      <motion.div
        style={{ position: 'relative', bottom: '35px', left: '0px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 2, duration: 2, repeatDelay: 10 }}
      >
        <Left />
      </motion.div>
      <motion.div
        style={{ position: 'relative', bottom: '55px', left: '6px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 6, duration: 2, repeatDelay: 10 }}
      >
        <Right />
      </motion.div>
      <motion.div
        style={{ position: 'relative', bottom: '80px', left: '3px' }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, delay: 10, duration: 2, repeatDelay: 10 }}
      >
        <Ok />
      </motion.div>
    </div>
  );
};

export default OpenChat;
