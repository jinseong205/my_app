CREATE TABLE USR
( 
    ID  VARCHAR2(20) NOT NULL,
    PW  VARCHAR2(200),
    NAME    VARCHAR2(20),
    PHONE VARCHAR(12)
);

ALTER TABLE USR ADD CONSTRAINT USR_PK PRIMARY KEY (ID);

commit;

INSERT INTO usr
(ID,PW)
VALUES
('jinseong205', '0000'); 

