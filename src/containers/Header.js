import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as headerActions from "../actions/header";
import Header from "../components/Header";

const mapStateToProps = ({ newBooks, filter }) => ({
  filterBy: filter.filterBy
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(headerActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
