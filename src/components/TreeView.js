import React from 'react';
import { JSONTree } from 'react-json-tree';
import './TreeView.css';

function TreeView({ data }) {
  const theme = {
    scheme: 'bright',
    base00: '#000000',
    base01: '#303030',
    base02: '#505050',
    base03: '#b0b0b0',
    base04: '#d0d0d0',
    base05: '#e0e0e0',
    base06: '#f5f5f5',
    base07: '#ffffff',
    base08: '#fb9fb1',
    base09: '#eda987',
    base0A: '#ddb26f',
    base0B: '#acc267',
    base0C: '#12cfc0',
    base0D: '#6fc2ef',
    base0E: '#e1a3ee',
    base0F: '#deaf8f',
  };

  return (
    <div className="treeview">
      {data ? (
        <JSONTree data={data} theme={theme} shouldExpandNode={() => true} />
      ) : (
        <div>Nenhum dado disponível.</div>
      )}
    </div>
  );
}

export default TreeView;