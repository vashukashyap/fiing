import Accordion from "../Accordion/Accordion";

const FaqsSection = () => {
  return (
    <>
      <>
        {/* Container for demo purpose */}
        <div className="container my-24 mx-auto md:px-6 xl:px-24">
          {/* Section: Design Block */}
          <section className="mb-32">
            <h2 className="mb-6 pl-6 text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
            <div id="accordionFlushExample">
              <Accordion
                question={"Can Fiing handle both paper and digital invoices?"}
                answer={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum. Natus recusandae laboriosam quos pariatur corrupti id dignissimos deserunt, praesentium voluptatibus temporibus consequatur non aspernatur laborum rerum nemo dolorem libero inventore provident exercitationem sunt totam aperiam. Facere sunt quos commodi obcaecati temporibus alias amet! Quam quisquam laboriosam quae repellendus non cum adipisci odio?"
                }
              />
              <Accordion
                question={"How secure is my financial data with Fiing?"}
                answer={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum. Natus recusandae laboriosam quos pariatur corrupti id dignissimos deserunt, praesentium voluptatibus temporibus consequatur non aspernatur laborum rerum nemo dolorem libero inventore provident exercitationem sunt totam aperiam. Facere sunt quos commodi obcaecati temporibus alias amet! Quam quisquam laboriosam quae repellendus non cum adipisci odio?"
                }
              />
              <Accordion
                question={
                  "Can Fiing integrate with other accounting software we currently use?"
                }
                answer={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum. Natus recusandae laboriosam quos pariatur corrupti id dignissimos deserunt, praesentium voluptatibus temporibus consequatur non aspernatur laborum rerum nemo dolorem libero inventore provident exercitationem sunt totam aperiam. Facere sunt quos commodi obcaecati temporibus alias amet! Quam quisquam laboriosam quae repellendus non cum adipisci odio?"
                }
              />
              <Accordion
                question={"Is Fiing suitable for businesses of all sizes?"}
                answer={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio vitae inventore autem fugiat rerum sed laborum. Natus recusandae laboriosam quos pariatur corrupti id dignissimos deserunt, praesentium voluptatibus temporibus consequatur non aspernatur laborum rerum nemo dolorem libero inventore provident exercitationem sunt totam aperiam. Facere sunt quos commodi obcaecati temporibus alias amet! Quam quisquam laboriosam quae repellendus non cum adipisci odio?"
                }
              />
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
    </>
  );
};
export default FaqsSection;
