import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Card.Header style={{ textAlign: "center", fontWeight: "bold" }}>
          Quote
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
              <Button variant="primary" onClick={onNext}>
                New quotation
              </Button>
              <Button variant="secondary" onClick={onCopy}>
                Copy quotation
              </Button>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default QuotationCard;
