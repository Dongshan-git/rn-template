/**
 * 通过手机号登录时，设置登录密码
 */
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';

import AuthTemplate from 'modules/auth/components/AuthTemplate';
import { useNavigation } from '@react-navigation/core';

const FormContent = () => {
  const [form] = useForm();
  const navigation = useNavigation();

  const handleFinish = (values: Store) => {
    console.log(values);
    navigation.navigate('ForgetPass');
  };

  return (
    <Form component={false} form={form} onFinish={handleFinish}>
      <Field name="phone" trigger="onChangeText">
        <TextInput
          placeholder="请输入手机号"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <Field name="sms" trigger="onChangeText">
        <TextInput
          placeholder="请输入验证码"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <TouchableOpacity onPress={form.submit} style={styles.btn}>
        <Text style={{ fontSize: 18, lineHeight: 22, color: '#fff', fontWeight: '500' }}>确认</Text>
      </TouchableOpacity>
    </Form>
  );
};

export default function BindPhone() {
  return (
    <AuthTemplate title="绑定手机号" subtitle="绑定的手机号可以用来登录，若账号丢失或出现异常可通过绑定手机号找回密码">
      <FormContent />
    </AuthTemplate>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3171F0',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
