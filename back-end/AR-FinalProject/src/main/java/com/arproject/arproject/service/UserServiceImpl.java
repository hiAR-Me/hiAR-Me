package com.arproject.arproject.service;


import com.arproject.arproject.model.User;
import com.arproject.arproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Transactional
    @Override
    public User findById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public User findByUserName(String userName) {
        List<User> allUsers = userRepository.findAll();
        List<User> userNamesFound = allUsers.stream()
                .filter(user -> user.getUserName().equals(userName))
                .collect(Collectors.toList());
        int userId = userNamesFound.get(0).getId();

        return userRepository.findOne(userId);
    }

    @Transactional
    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Transactional
    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Transactional
    @Override
    public void deleteUser(int id) {
        userRepository.delete(id);
    }

    @Transactional
    @Override
    public void deleteAllUsers() {
        userRepository.deleteAll();
    }
}
