import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.less';


interface IndexProps {
  dispatch: Function,
  count: number
}

class IndexPage extends React.Component<IndexProps, {}>{

  public addOne = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'user/addAfter1Second',
      payload: 1
    })
  }

  render () {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li>
            <Button type="danger" onClick={this.addOne}>Click: {this.props.count}</Button>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { count: state.user.count };
}

export default connect(mapStateToProps)(IndexPage);
