import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaRegCopy } from "react-icons/fa";

function QuotationCard({ quotation, onCopy, onNext }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "1rem",
      }}
    >
      <Card
        style={{
          width: "500px",
          backgroundColor: "#f0dadaff",
          borderRadius: "1rem",
        }}
      >
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            textAlign: "center",
            fontWeight: "bold",
            padding: "0.5rem",
          }}
        >
          <FaRegCopy onClick={onCopy} />
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ fontStyle: "italic", textAlign: "center" }}>
              "{quotation.quote}"
            </p>
            <footer
              className="blockquote-footer"
              style={{ textAlign: "center" }}
            >
              <cite title="Source Title">{quotation.author}</cite>
            </footer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="primary"
                style={{
                  width: "200px",
                  backgroundColor: "#f0dadaff",
                  borderRadius: "1rem",
                }}
                onClick={onNext}
              >
                New quotation
              </Button>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QuotationCard;
