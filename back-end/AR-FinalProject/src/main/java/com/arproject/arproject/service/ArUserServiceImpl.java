package com.arproject.arproject.service;


import com.arproject.arproject.model.ArUser;
import com.arproject.arproject.repository.ArUserRepository;
import com.sun.tools.internal.xjc.reader.xmlschema.bindinfo.BIConversion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArUserServiceImpl implements ArUserService {

    @Autowired
    ArUserRepository arUserRepository;

    @Transactional
    @Override
    public ArUser findById(int id) {
        return arUserRepository.findOne(id);
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
}
