<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class InitDataCommand extends Command
{
    protected static $defaultName = 'app:init-data';
    protected $encoder;
    protected $em;

    public function __construct(UserPasswordEncoderInterface $encoder,
        EntityManagerInterface $em)
    {
        parent::__construct();
        $this->encoder = $encoder;
        $this->em = $em;
    }

    protected function configure()
    {
        $this->setDescription('Init the users');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $user1 = new User();
        $password1 = $this->encoder->encodePassword($user1, 'Test123!');
        $user1->setEmail('antonellapalacios@gmail.com')
            ->setPassword($password1)
            ->setRoles(['ROLE_ADMIN']);
        $user2 = new User();
        $password2 = $this->encoder->encodePassword($user2, 'Test123!');
        $user2->setEmail('majolutteral@gmail.com')
            ->setPassword($password2)
            ->setRoles(['ROLE_ADMIN']);
        $this->em->persist($user1);
        $this->em->persist($user2);
        $this->em->flush();

        return Command::SUCCESS;
    }
}
