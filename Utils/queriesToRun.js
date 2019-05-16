exports.queries = {

    SELECT_USER_QUERY : "select username from user_user where is_staff = 't' and is_active = 't' order by id desc limit 1;",
    GET_USER_NAME : "select concat(first_name, ' ', last_name) as fullname from user_user where is_staff = 't' and is_active = 't' order by id desc limit 1;",

};

