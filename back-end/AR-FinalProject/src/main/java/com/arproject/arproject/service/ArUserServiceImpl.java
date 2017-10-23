package com.arproject.arproject.service;

import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.model.ArUserFile;
import com.arproject.arproject.repository.ArUserRepository;
import com.arproject.arproject.repository.ArUserFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ArUserServiceImpl implements ArUserService {

    @Autowired
    ArUserRepository arUserRepository;

    @Autowired
    ArUserFileRepository arUserFileRepository;

// ========== ArUser Methods ==========

  // ----- Find user Methods -----
    @Transactional
    @Override
    public ArUser findArUserById(int id) {
        ArUser arUser = arUserRepository.findOne(id);
        arUser.getArUserFiles().size();
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
    public ArUser addArUser(ArUser arUser) {
        return arUserRepository.save(arUser);
    }

    @Transactional
    @Override
    public ArUser updateArUser(ArUser arUser) {
        return arUserRepository.save(arUser);
    }

  // ----- Delete User and All Users -----
    @Transactional
    @Override
    public void deleteArUser(int id) {
        arUserRepository.delete(id);
    }

    @Transactional
    @Override
    public void deleteAllArUsers() {
        arUserRepository.deleteAll();
    }

// ========== ArUserFile Methods ==========

  // ----- User addNewObject
    @Override
    public ArUser addNewFile(ArUserFile arUserFile) {
            arUserFileRepository.save(arUserFile);
        ArUser arUser = arUserRepository.findOne(arUserFile.getArUser().getId());
            arUser.getArUserFiles().add(arUserFile);
            arUserRepository.save(arUser);

        return findArUserById(arUserFile.getArUser().getId());

    }

  // ----- User deleteObject -----
    @Override
    public ArUser deleteFile(int arUserId, int objectId) {
        ArUserFile arUserFile = arUserFileRepository.findOne(objectId);
            arUserFileRepository.delete(objectId);
        ArUser arUser = arUserRepository.findOne(arUserId);
            arUser.getArUserFiles().remove(arUserFile);
            arUserRepository.save(arUser);

        return findArUserById(arUserId);
    }

}
