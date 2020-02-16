import React from "react";

interface I_Props_Header {
  total: number;
}

class Header extends React.Component<I_Props_Header> {
  render() {
    return (
      <div>
        總投票數 ：{this.props.total}
        <hr />
      </div>
    );
  }
}

export default Header;
