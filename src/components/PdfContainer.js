import React from 'react';

const PdfContainer = (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section>
      <section
        style={{
          margin: '10px 10px',
          textAlign: 'center',
        }}
      >
        <button
          style={{
            borderRadius: '5px',
            border: '3px solid salmon',
            background: 'lightpink',
            color: 'white',
            fontWeight: 'bolder',
          }}
          onClick={createPdf}
        >
          Create PDF
        </button>
      </section>
      <section ref={bodyRef}>{props.children}</section>
    </section>
  );
};

export default PdfContainer;
