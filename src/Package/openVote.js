import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import Button from './Button';
import Icon from './icons';

const range = (a, b) => Array.from((function* (x, y) {
  while (x <= y) yield x++;
})(a, b));

const ContentVote = ({ onSubmit, title, initialValue = {} }) => {
  const [score, setScore] = useState(initialValue.score || 0);
  const [content, setContent] = useState(initialValue.content || '');
  const [loading, setLoading] = useState(false);

  const onClose = () => Modal.destroyAll();
  const handleSubmit = async () => {
    if (
      typeof onSubmit !== 'function'
    ) {
      return;
    }
    setLoading(true);
    await onSubmit({ score, content });
    onClose();
  };

  return (
    <div className="fwork-vote-box">
      <div className="vote-header">
        <h3>{title}</h3>
        <span className="fwork-vote-close" onClick={onClose}>
          <Icon size={10} type="close" />
        </span>
      </div>
      <span className="vote-score">{score}/5</span>
      <div className="vote-rating">{range(1, 5).map(el =>
        <div key={el} onClick={() => setScore(el)}>
          <Icon size={32} type={el <= score ? 'star-rate-checked' : 'star-rate'} />
        </div>
      )}</div>
      <Input.TextArea
        rows={3}
        value={content}
        className="vote-content"
        placeholder="Nhập ý kiến của bạn"
        onChange={({ target: { value } }) => setContent(value)}
      />
      <footer>
        <Button onClick={onClose}>Huỷ Bỏ</Button>
        <Button
          type="primary"
          onClick={handleSubmit}
          disabled={score < 1 || score > 5}
          loading={loading}
        >Đánh giá</Button>
      </footer>
    </div>
  );
};

const openVote = (props) => Modal.confirm({
  content: <ContentVote {...props} />,
  visible: true,
  className: 'fwork-modal-create-vote',
  cancelButtonProps: { style: { display: 'none' } },
  okButtonProps: { style: { display: 'none' } },
  icon: null,
  footer: null,
  okText: 'Đánh giá',
  cancelText: 'Huỷ bỏ'
});

export default openVote;
