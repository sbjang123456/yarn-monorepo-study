/* next */
import type { FC } from 'react';
import { useState, useEffect } from 'react';

/* lib */
import { Checkbox, Form, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

/* constans */
import FORM_RULES from '@sb/core-lib/utils/form-rules';
import { REGISTER_AGREE_LIST } from '../../../constants/codes';

/* style */
import { MaxButton, FlexBetweenBox, LineBox } from '../../style/common';

/* types */
import type { IProps } from '../../Interface/Register';

const Register02: FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();
  const [allAgree, setAllAgree] = useState(false);

  const changeAllAgree = () => {
    setAllAgree(!allAgree);
    const clearTypes = REGISTER_AGREE_LIST.reduce(
      (acc, current) => ({ ...acc, [current.name]: !allAgree }),
      {}
    );
    form.setFieldsValue({ ...clearTypes });
  };

  useEffect(() => {
    props.setTitle('약관에 동의해 주세요.');
  }, []);

  return (
    <>
      <LineBox
        onClick={changeAllAgree}
        css={allAgree && { borderColor: '#1772f8' }}
      >
        <CheckOutlined
          style={allAgree ? { color: '#1772f8' } : { color: '#000' }}
        />
        <b>모든 항목에 동의하기</b>
      </LineBox>
      {REGISTER_AGREE_LIST.map((agree) => (
        <Form.Item
          shouldUpdate
          key={agree.name}
          name={agree.name}
          valuePropName="checked"
          rules={agree.name !== 'agree4' ? FORM_RULES.defaultrule : undefined}
        >
          <FlexBetweenBox>
            <Checkbox>{agree.label}</Checkbox>
            <u>보기</u>
          </FlexBetweenBox>
        </Form.Item>
      ))}
      <Form.Item>
        <MaxButton>
          <Button type="primary" htmlType="submit">
            이동
          </Button>
        </MaxButton>
      </Form.Item>
    </>
  );
};

export default Register02;