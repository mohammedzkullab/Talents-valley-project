import TableLayout from "../tableLayout/TableLayout";
import { StyledInvoiceBody, StyledStatus } from "./style";
import paypal from "../../../assets/images/paypal.png";
import cards from "../../../assets/images/debit-cards.png";
import stripe from "../../../assets/images/Stripe.png";
import verto from "../../../assets/images/Verto.png";

const Invoices = () => {
  const headers = ["Name", "Status", "Amount", "Date", "FreeLancer", "Client"];
  const StatusCell = ({ item }) => (
    <StyledStatus itemStatus={item?.status}>
      {item?.status === "pending_approval" ||
      item?.status === "pending_verification"
        ? "pending"
        : item?.status}
      {item?.status === "sent" && (
        <img alt="sent" width="22px" height="22px" src={cards} />
      )}

      {item?.paymentMethod?.name === "Paypal" && (
        <img alt="paypal" width="22px" height="22px" src={paypal} />
      )}
      {item?.paymentMethod?.name === "Stripe" && (
        <img alt="Stripe" width="22px" src={stripe} />
      )}
      {item?.paymentMethod?.name === "Verto" && (
        <img alt="verto" width="22px" height="22px" src={verto} />
      )}
    </StyledStatus>
  );

  const TableBody = ({ item }) => {
    console.log(item);
    return (
      <StyledInvoiceBody>
        <td className="bold">
          <span>{item.fixed[0]?.itemName}</span>
        </td>
        <td>
          <StatusCell item={item} />
        </td>
        <td>
          {item?.currency === "USD" && "$"}
          {item.subTotal}
        </td>
        <td className="date">
          {new Date(item.createdAt).toDateString("en-us", {
            month: "short",
            day: "numeric",
          })}
        </td>
        <td className="bold">
          {item.freelancer.firstName} {item.freelancer.lastName}
        </td>

        <td>
          {item.client.firstName} {item.client.lastName}
        </td>
      </StyledInvoiceBody>
    );
  };
  return (
    <TableLayout
      heading="Invoices"
      headers={headers}
      TableBody={TableBody}
      endpoint="team/invoice/listing"
      offset={280}
      isSearch={true}
    />
  );
};

export default Invoices;
