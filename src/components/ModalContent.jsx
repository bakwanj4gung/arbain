import React from 'react'

function ModalContent({content}) {
    const renderNode = (node, index) => {
        if (node.type === 'p') {
            return (
                <p key={index} className={node.style || ''}>
                    {node.children && node.children.map((child, i) => renderNode(child, i))}
                </p>
            );
        }

        if (node.type === 'span') {
            return (
                <span key={index} className={node.style || ''}>
                    {node.text} {' '}
                </span>
            );
        }

        if (node.type === 'ul') {
            return (
                <ul key={index} className={node.style || ''}>
                    {node.items && node.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        }

        return (<p className='text-red-500'>Error</p>);
    };
    return (
        <div className="space-y-2 leading-relaxed">
            {content.map((node, index) => renderNode(node, index))}
        </div>
    )
}

export default ModalContent