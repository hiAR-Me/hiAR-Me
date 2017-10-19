package com.arproject.arproject.service;


import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.model.UserObject;
import com.arproject.arproject.repository.ArUserRepository;
import com.arproject.arproject.repository.UserObjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ArUserServiceImpl implements ArUserService {

    @Autowired
    ArUserRepository arUserRepository;

    @Autowired
    UserObjectRepository userObjectRepository;

// ========== ArUser Methods ==========

  // ----- Find user Methods -----
    @Transactional
    @Override
    public ArUser findById(int id) {
        ArUser arUser = arUserRepository.findOne(id);
        arUser.getUserObjects().size();
        return arUser;
    }

    @Override
    public ArUser findByUserName(String userName) {
        List<ArUser> allArUsers = arUserRepository.findAll();

        for(ArUser aUser:allArUsers) {
            if (aUser.getUserName().equals(userName)) {
                return aUser;
            }
        }
        return null;
    }

  // ----- Add and Update ArUser -----
    @Transactional
    @Override
    public ArUser addUser(ArUser arUser) {
        return arUserRepository.save(arUser);
    }

    @Transactional
    @Override
    public ArUser updateUser(ArUser arUser) {
        return arUserRepository.save(arUser);
    }

  // ----- Delete User and All Users -----
    @Transactional
    @Override
    public void deleteUser(int id) {
        arUserRepository.delete(id);
    }

    @Transactional
    @Override
    public void deleteAllUsers() {
        arUserRepository.deleteAll();
    }

// ========== UserObject Methods ==========

  // ----- User addNewObject
    @Override
    public ArUser addNewObject(UserObject userObject) {
            userObjectRepository.save(userObject);
        ArUser arUser = arUserRepository.findOne(userObject.getArUser().getId());
            arUser.getUserObjects().add(userObject);
            arUserRepository.save(arUser);

        return findById(userObject.getArUser().getId());

    }

  // ----- User deleteObject -----
    @Override
    public ArUser deleteObject(int arUserId, int objectId) {
        UserObject userObject = userObjectRepository.findOne(objectId);
            userObjectRepository.delete(objectId);
        ArUser arUser = arUserRepository.findOne(arUserId);
            arUser.getUserObjects().remove(userObject);
            arUserRepository.save(arUser);

        return findById(arUserId);
    }

}
