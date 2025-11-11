import React, { useState } from "react";
import "./TreeSelect.css";


type TreeNode = {
    id: string | number;
    label: string;
    children?: TreeNode[];
};


export interface TreeSelectProps {
    data: TreeNode[];
    onSelect?: (id: string | number) => void;
}


export const TreeSelect: React.FC<TreeSelectProps> = ({ data, onSelect }) => {
    const [expanded, setExpanded] = useState<Set<string | number>>(new Set());


    const toggleNode = (id: string | number) => {
        const newExpanded = new Set(expanded);
        newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
        setExpanded(newExpanded);
    };


    const renderTree = (nodes: TreeNode[]) => (
        <ul className="tree-select">
            {nodes.map((node) => (
                <li key={node.id}>
                    <div className="tree-node">
                        {node.children && (
                            <span className="toggle" onClick={() => toggleNode(node.id)}>
                                {expanded.has(node.id) ? "−" : "+"}
                            </span>
                        )}
                        <span
                            className="label"
                            onClick={() => onSelect?.(node.id)}
                        >
                            {node.label}
                        </span>
                    </div>
                    {node.children && expanded.has(node.id) && renderTree(node.children)}
                </li>
            ))}
        </ul>
    );


    return <div className="tree-select-container">{renderTree(data)}</div>;
};