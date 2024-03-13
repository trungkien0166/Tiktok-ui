import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1e03dacb253b3ded6608576e8f77b30d~c5_100x100.jpeg?lk3s=30310797&x-expires=1710370800&x-signature=tj5qV2nnHJAAEKZ9G4y3ABS8Bxc%3D" alt="Hoaa" />
            <div className={cx('info')} >
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div >
    );
}
export default AccountItem;

